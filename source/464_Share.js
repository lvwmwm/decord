// Module ID: 464
// Function ID: 6141
// Name: Share
// Dependencies: [6, 7, 44, 465]

// Module 464 (Share)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class Share {
    constructor() {
      tmp = outer1_3(this, Share);
      return;
    }
  }
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
          Share(outer1_2[2])(tmp4, "Content to share must be a valid object");
          let tmp10 = "string" === typeof url.url;
          const tmp3 = Share(outer1_2[2]);
          if (!tmp10) {
            tmp10 = "string" === typeof url.message;
          }
          Share(outer1_2[2])(tmp10, "At least one of URL or message is required");
          let tmp15 = "object" === typeof obj;
          const tmp9 = Share(outer1_2[2]);
          if (tmp15) {
            tmp15 = null !== obj;
          }
          Share(outer1_2[2])(tmp15, "Options must be a valid object");
          const tmp14 = Share(outer1_2[2]);
          Share(outer1_2[2])(outer1_1(outer1_2[3]), "ShareModule should be registered on Android.");
          let tmp25 = null == url.title;
          const tmp20 = Share(outer1_2[2]);
          if (!tmp25) {
            tmp25 = "string" === typeof url.title;
          }
          Share(outer1_2[2])(tmp25, "Invalid title: title should be a string.");
          obj = { title: url.title };
          let message;
          if ("string" === typeof url.message) {
            message = url.message;
          }
          obj.message = message;
          const tmp23 = Share(outer1_2[2]);
          const obj3 = outer1_1(outer1_2[3]);
          return outer1_1(outer1_2[3]).share(obj, obj.dialogTitle).then((arg0) => Object.assign({ activityType: null }, arg0));
        }
        obj = {};
      }
    }
  ];
  return callback(Share, null, items);
})();
tmp2.sharedAction = "sharedAction";
tmp2.dismissedAction = "dismissedAction";

export default tmp2;
