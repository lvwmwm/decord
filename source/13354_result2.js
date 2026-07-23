// Module ID: 13354
// Function ID: 102609
// Name: result2
// Dependencies: []

// Module 13354 (result2)
arg5.default = function apiResponse() {
  return (arg0) => {
    let closure_0 = arg0;
    const features = {
      apiResponse(request, response, duration) {
        let status = response;
        if (response) {
          status = response.status;
        }
        if (status) {
          status = "number" === typeof response.status;
        }
        if (status) {
          status = response.status >= 200;
        }
        if (status) {
          status = response.status <= 299;
        }
        closure_0.send("api.response", { request, response, duration }, !status);
      }
    };
    return { features };
  };
};
