# Assertions

An Assertion is....

# How it looks like

```js
    expect(element).toBeInTheDocument();
```

- Expect: is a `Jest` global var. Starts the Assertion.
- Exprect argument (element): subject or the assertion.
- Matcher (toBeInTheDocument()): is the type of assertion. This matcher comes from jest DOM.
- Matcher argument: refines matcher, can be empty.