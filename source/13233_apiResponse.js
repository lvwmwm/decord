// Module ID: 13233
// Function ID: 100420
// Name: apiResponse
// Dependencies: []

// Module 13233 (apiResponse)
arg5.default = function apiResponse() {
  return (arg0) => {
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
        request.send("api.response", { request, response, duration }, !status);
      }
    };
    return { features };
  };
};
