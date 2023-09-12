import FooComponent from "./components/foo.js";
interface Registry {
    Foo: typeof FooComponent;
}
export { Registry as default };
