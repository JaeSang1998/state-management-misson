import { rest } from "msw";

export const handlers = [
  rest.get("/api/boardposts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        posts: [
          { id: 1, title: "Hello Board" },
          { id: 2, title: "React is Great" },
          { id: 3, title: "Lorem Ipsum" },
        ],
      })
    );
  }),

  rest.get("/api/cart", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          { id: 101, name: "Apple" },
          { id: 102, name: "Orange" },
        ],
      })
    );
  }),

  rest.get("/api/mails", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mails: [
          { id: 201, subject: "Important notice" },
          { id: 202, subject: "Welcome to our service" },
        ],
      })
    );
  }),
];
