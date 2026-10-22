// Module ID: 15625
// Function ID: 15626
// Dependencies: []
// Exports: default

// Module 15625

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
