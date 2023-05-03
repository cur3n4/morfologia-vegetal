module.exports = {
  load: {
    before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
    order: ["parser", ],
    after: ["router", ],
  },
  settings: {
    viewRouter: {
      enabled: true,
    },
  },
};
