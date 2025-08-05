{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h1 tag</h2>
    </div>
</div>

ReactElement(Object) ⇒ HTML(Browser Understands) */}

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!")

// Nested elements

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, " Iam an h1 tag"),
        React.createElement("h2", {}, " Iam an h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]
    )
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
