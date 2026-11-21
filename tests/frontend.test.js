const fs = require("fs");
const vm = require("vm");

const code = fs.readFileSync("./frontend/js/code.js", "utf8");

// Unit Test: Check logout
test("Logout redirects to login page", () => {
  const app = {
    document: { cookie: "firstName=Test" },
    window: { location: { href: "color.html" } }
  };

  vm.runInNewContext(code, app);
  app.doLogout();

  expect(app.window.location.href).toBe("index.html");
  expect(app.document.cookie).toContain("1970");
});

// Integration Test: Check Add Color with a mock API
test("Add Color sends request and shows success", () => {
  const result = { innerHTML: "" };
  let request;

  const app = {
    document: {
      getElementById: (id) =>
        id === "colorText" ? { value: "Blue" } : result
    },
    XMLHttpRequest: class {
      open(method, url) {
        this.method = method;
        this.url = url;
      }

      setRequestHeader() {}

      send(data) {
        request = {
          method: this.method,
          url: this.url,
          body: JSON.parse(data)
        };

        this.readyState = 4;
        this.status = 200;
        this.onreadystatechange();
      }
    }
  };

  vm.runInNewContext(code, app);
  app.addColor();

  expect(request.method).toBe("POST");
  expect(request.url).toContain("AddColor.php");
  expect(request.body.color).toBe("Blue");
  expect(result.innerHTML).toBe("Color has been added");
});
