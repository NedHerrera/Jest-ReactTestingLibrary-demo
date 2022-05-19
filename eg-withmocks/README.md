# Example 2, now with mocks

In a lot of cases ours code blocks must interacting with the server side but how we can test in those cases?

Simple, using `mocks`. A `mock` is...

You can see the doc [here](https://mswjs.io/docs/api/rest).

## Step 0: install msw

```sh
npm install msw --save-dev
```

## Step 1: please, be tidy <3

Create a folder named 'mocks' in your src folder.

## Step 2: make yous handlers

In the 'mocks' folder create the handler file: `handler.js`. You must import this:

```js
import { rest } from 'msw';
```

and write your 'endpoints' like this:

```js
export const handlers = [
    rest.post('http://localhost:3030/login', (req, res, ctx) => { 
        return res(
            ctx.status(200)
        );
    }),
    rest.get('http://localhost:3030/user', (req, res, ctx) => { 
        return res(
            ctx.status(403),
            ctx.json({
            errorMessage: 'Not authorized',
            }),
        )
    }),
]
```

## Step 3: prepare the mock server

In the 'mocks' folder create the handler file: `server.js`, with this:

```js
// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

## Step 4: connect your mock-server with the testing DOM

The querys made by react will be intercepted.

Find and modify 'src/setupTests.js' file writting this:

```js
// src/setupTests.js
import { server } from './mocks/server.js'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

## Step 4: you are ready, go to axios!

