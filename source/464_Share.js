// Module ID: 464
// Function ID: 6141
// Name: Share
// Dependencies: [6, 7, 2, 6]

// Module 464 (Share)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = () => {
  class Share {
    constructor() {
      tmp = _classCallCheck(this, Share);
      return;
    }
  }
  const arg1 = Share;
  const items = [
    {
      key: "share",
      value: function share(url, dialogTitle, arg2, SECURE_FRAMES_STREAM_BOTTOM_SHEET, arg4) {
        if (arguments.length > 1) {
          if (undefined !== arguments[1]) {
            let obj = arguments[1];
          }
          let tmp4 = "object" === typeof url;
          if (tmp4) {
            tmp4 = null !== url;
          }
          Share(closure_2[2])(tmp4, "Content to share must be a valid object");
          let tmp10 = "string" === typeof url.url;
          const tmp3 = Share(closure_2[2]);
          if (!tmp10) {
            tmp10 = "string" === typeof url.message;
          }
          Share(closure_2[2])(tmp10, "At least one of URL or message is required");
          let tmp15 = "object" === typeof obj;
          const tmp9 = Share(closure_2[2]);
          if (tmp15) {
            tmp15 = null !== obj;
          }
          Share(closure_2[2])(tmp15, "Options must be a valid object");
          const tmp14 = Share(closure_2[2]);
          Share(closure_2[2])(callback(closure_2[3]), "ShareModule should be registered on Android.");
          let tmp25 = null == url.title;
          const tmp20 = Share(closure_2[2]);
          if (!tmp25) {
            tmp25 = "string" === typeof url.title;
          }
          Share(closure_2[2])(tmp25, "Invalid title: title should be a string.");
          obj = { title: url.title };
          let message;
          if ("string" === typeof url.message) {
            message = url.message;
          }
          obj.message = message;
          const tmp23 = Share(closure_2[2]);
          const obj3 = callback(closure_2[3]);
          return callback(closure_2[3]).share(obj, obj.dialogTitle).then((arg0) => Object.assign({ activityType: null }, arg0));
        }
        obj = {};
      }
    }
  ];
  return callback(Share, null, items);
}();
tmp2.sharedAction = "sharedAction";
tmp2.dismissedAction = "dismissedAction";

export default tmp2;
