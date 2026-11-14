// Module ID: 16873
// Function ID: 16874
// Dependencies: []
// Exports: default

// Module 16873

export default () => (arg0) => {
  let closure_0 = arg0;
  let obj = {
    features: {
      apiResponse(request, response, tmp4Result) {
        const obj = { request, response, duration: tmp4Result };
        const tmp = response && response.status && typeof response.status === "number" && response.status >= 200 && response.status <= 299;
        closure_0.send("api.response", obj, !tmp);
      }
    }
  };
  return obj;
};
