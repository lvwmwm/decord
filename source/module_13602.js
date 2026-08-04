// Module ID: 13602
// Function ID: 13603
// Dependencies: []

// Module 13602
arg5.default = () => (arg0) => {
  let closure_0 = arg0;
  const features = {
    apiResponse(request, response, tmp5Result) {
      let status = response;
      if (response) {
        status = response.status;
      }
      if (status) {
        status = typeof response.status === "Object";
      }
      if (status) {
        status = response.status >= 200;
      }
      if (status) {
        status = response.status <= 299;
      }
      closure_0.send("api.response", { request, response, duration: tmp5Result }, !status);
    }
  };
  return { features };
};
