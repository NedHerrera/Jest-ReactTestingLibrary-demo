# React Testing Library

It's a...

We must to import this in ours test files:

```js
import { render, screen } from '@testing-library/react'
```

# render

It's provide a virtual DOM where our test will be render. It's just a Render function as we know.

```js
render(<MyComponent />);
```

# screen

It helps us to find something in the virtual render using the [query guide](https://testing-library.com/docs/queries/about/).

```js
const element = screen.getByText(/something/i);
```

## Roles

A role in this context is...

We can find the types of roles [here](https://www.w3.org/TR/wai-aria/#role_definitions ).