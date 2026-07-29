// Module ID: 5904
// Function ID: 5905
// Name: toSubmission
// Dependencies: [109, 5897, 659, 2]
// Exports: createDefaultPersonalWidgetTop

// Module 5904 (toSubmission)
import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
let closure_3 = ["localDataUri"];
let UserProfilePersonalWidget;
class UserProfilePersonalWidget {
  constructor(arg0) {
    ({ header, top, bottom } = global);
    obj = Object.create(new.target.prototype);
    obj.id = global.id;
    obj.type = require("WidgetType").WidgetType.PERSONAL;
    if (header == null) {
      header = "";
    }
    obj.header = header;
    tmp2 = undefined;
    if (null != top) {
      str = top.title;
      if (str == null) {
        str = "";
      }
      obj = { title: null, subtitle: null, image: null };
      obj[0] = str;
      str2 = top.subtitle;
      if (str2 == null) {
        str2 = "";
      }
      obj[1] = str2;
      obj[2] = top.image;
      tmp2 = obj;
    }
    obj.top = tmp2;
    entries = undefined;
    if (bottom != null) {
      entries = bottom.entries;
    }
    if (entries == null) {
      entries = [];
    }
    obj1 = {
      entries: entries.map((hideImage) => {
            let tmp = hideImage;
            if (true === hideImage.hideImage) {
              tmp = hideImage;
              if (null != hideImage.image) {
                const obj = {};
                const merged = Object.assign(hideImage);
                obj.image = undefined;
                tmp = obj;
              }
            }
            return tmp;
          })
    };
    obj.bottom = obj1;
    return obj;
  }
}
const prototype = UserProfilePersonalWidget.prototype;
prototype["toSubmission"] = function toSubmission() {
  const self = this;
  let obj = { id: this.id, data: null };
  obj = { type: this.type, title: null };
  obj = { header: this.header, top: null, bottom: null };
  let tmp;
  if (null != this.top) {
    const obj1 = {};
    let merged = Object.assign(self.top);
    let image = self.top.image;
    let tmp4 = image;
    if (null != image) {
      tmp4 = image;
      if ("localDataUri" in image) {
        let localDataUri = image.localDataUri;
        tmp4 = callback(image, closure_3);
      }
    }
    obj1.image = tmp4;
    tmp = obj1;
  }
  obj[1] = tmp;
  const obj2 = {};
  const merged1 = Object.assign(self.bottom);
  const entries = self.bottom.entries;
  obj2.entries = entries.map((image) => {
    const obj = {};
    const merged = Object.assign(image);
    image = image.image;
    let tmp2 = image;
    if (null != image) {
      tmp2 = image;
      if ("localDataUri" in image) {
        const localDataUri = image.localDataUri;
        tmp2 = callback(image, closure_3);
      }
    }
    obj.image = tmp2;
    return obj;
  });
  obj[2] = obj2;
  obj[1] = JSON.stringify(obj);
  obj[1] = obj;
  return obj;
};
prototype["isDiscardable"] = function isDiscardable() {
  const self = this;
  let everyResult = "" === this.header.trim();
  if (everyResult) {
    let tmp3 = null == self.top;
    if (!tmp3) {
      let tmp4 = "" === self.top.title.trim();
      if (tmp4) {
        tmp4 = "" === self.top.subtitle.trim();
        const str3 = self.top.subtitle;
      }
      if (tmp4) {
        tmp4 = null == self.top.image;
      }
      tmp3 = tmp4;
      let str2 = self.top.title;
    }
    everyResult = tmp3;
  }
  if (everyResult) {
    const entries = self.bottom.entries;
    everyResult = entries.every((value) => {
      let tmp = "" === value.value.trim();
      if (tmp) {
        tmp = "" === value.label.trim();
        const str2 = value.label;
      }
      if (tmp) {
        tmp = null == value.image;
      }
      return tmp;
    });
  }
  return everyResult;
};
prototype["isValid"] = function isValid() {
  return !this.isDiscardable();
};
prototype["isEqual"] = function isEqual(header) {
  let tmp = header instanceof UserProfilePersonalWidget;
  if (tmp) {
    const self = this;
    tmp = importDefault(659)(this.header, header.header) && importDefault(659)(self.top, header.top) && importDefault(659)(self.bottom, header.bottom);
    const tmp4 = importDefault(659)(this.header, header.header) && importDefault(659)(self.top, header.top) && importDefault(659)(self.bottom, header.bottom);
  }
  return tmp;
};
prototype["getUniqueKey"] = function getUniqueKey() {
  return this.type;
};
prototype["getProfileAnalyticsOptions"] = function getProfileAnalyticsOptions() {
  return { widgetType: this.type };
};
prototype["getProfileEditAnalyticsOptions"] = function getProfileEditAnalyticsOptions() {
  return { widgetEdited: this.type };
};
const result = require("isUndefinedOrNull").fileFinishedImporting("modules/user_profile/UserProfilePersonalWidget.tsx");

export function createDefaultPersonalWidgetTop() {
  return { title: "", subtitle: "" };
}
export { UserProfilePersonalWidget };
