import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3030/bye', (req, res, ctx) => {
    return res(
      ctx.json({ msg: 'delectus aut autem'})
    );
  }),
];