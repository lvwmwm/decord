// Module ID: 15789
// Function ID: 120850
// Name: StringFormat
// Dependencies: []

// Module 15789 (StringFormat)
class Compiler {
  constructor(arg0, arg1, arg2) {
    this.locales = arg0;
    this.formats = arg1;
    this.pluralFn = arg2;
    return;
  }
  compile(arg0) {
    this.pluralStack = [];
    this.currentPlural = null;
    this.pluralNumberFormat = null;
    return this.compileMessage(arg0);
  }
  compileMessage(arg0) {
    self = this;
    if (arg0) {
      str = "messageFormatPattern";
      if ("messageFormatPattern" === arg0.type) {
        elements = arg0.elements;
        items = [];
        length = elements.length;
        num = 0;
        num2 = 1;
        str3 = "argumentElement";
        str4 = "messageTextElement";
        if (0 < length) {
          while (true) {
            tmp = elements[num];
            type = tmp.type;
            if ("messageTextElement" === type) {
              arr = items.push(self.compileMessageText(tmp));
            } else if ("argumentElement" !== type) {
              break;
            } else {
              arr1 = items.push(self.compileArgument(tmp));
            }
            num = num + 1;
          }
          tmp2 = globalThis;
          _Error = Error;
          prototype = Error.prototype;
          tmp3 = new.target;
          str2 = "Message element does not have a valid type";
          tmp4 = new.target;
          error = new Error("Message element does not have a valid type");
          tmp6 = error;
          throw error;
        }
        return items;
      }
    }
    error1 = new Error("Message AST is not of type: \"messageFormatPattern\"");
    throw error1;
  }
  compileMessageText(arg0) {
    self = this;
    if (this.currentPlural) {
      obj = /(^|[^\\])#/g;
      if (obj.test(arg0.value)) {
        if (!self.pluralNumberFormat) {
          tmp2 = globalThis;
          _Intl = Intl;
          NumberFormat = Intl.NumberFormat;
          prototype = NumberFormat.prototype;
          tmp3 = new.target;
          tmp4 = new.target;
          numberFormat = new NumberFormat(self.locales);
          tmp6 = numberFormat;
          self.pluralNumberFormat = numberFormat;
        }
        tmp7 = PluralOffsetString;
        prototype2 = PluralOffsetString.prototype;
        tmp8 = new.target;
        tmp9 = new.target;
        replaced = new PluralOffsetString(self.currentPlural.id, self.currentPlural.format.offset, self.pluralNumberFormat, arg0.value);
      }
      return replaced;
    }
    str = arg0.value;
    replaced = str.replace(/\\#/g, "#");
    return;
  }
  compileArgument(arg0) {
    self = this;
    format = arg0.format;
    if (format) {
      ({ formats, locales, pluralFn } = self);
      type = format.type;
      str = "numberFormat";
      if ("numberFormat" === type) {
        obj = {};
        obj.id = arg0.id;
        tmp34 = globalThis;
        _Intl3 = Intl;
        NumberFormat = Intl.NumberFormat;
        prototype7 = NumberFormat.prototype;
        tmp35 = new.target;
        tmp36 = new.target;
        tmp37 = locales;
        numberFormat = new NumberFormat(locales, formats.number[format.style]);
        tmp39 = numberFormat;
        obj.format = numberFormat.format;
        return obj;
      } else {
        str4 = "dateFormat";
        if ("dateFormat" === type) {
          obj1 = {};
          obj1.id = arg0.id;
          tmp28 = globalThis;
          _Intl2 = Intl;
          DateTimeFormat2 = Intl.DateTimeFormat;
          prototype6 = DateTimeFormat2.prototype;
          tmp29 = new.target;
          tmp30 = new.target;
          tmp31 = locales;
          dateTimeFormat2 = new DateTimeFormat2(locales, formats.date[format.style]);
          tmp33 = dateTimeFormat2;
          obj1.format = dateTimeFormat2.format;
          return obj1;
        } else {
          str5 = "timeFormat";
          if ("timeFormat" === type) {
            obj = {};
            obj.id = arg0.id;
            tmp22 = globalThis;
            _Intl = Intl;
            DateTimeFormat = Intl.DateTimeFormat;
            prototype5 = DateTimeFormat.prototype;
            tmp23 = new.target;
            tmp24 = new.target;
            tmp25 = locales;
            dateTimeFormat = new DateTimeFormat(locales, formats.time[format.style]);
            tmp27 = dateTimeFormat;
            obj.format = dateTimeFormat.format;
            return obj;
          } else {
            str6 = "pluralFormat";
            if ("pluralFormat" === type) {
              tmp16 = PluralFormat;
              prototype4 = PluralFormat.prototype;
              tmp17 = new.target;
              tmp18 = new.target;
              tmp19 = pluralFn;
              tmp20 = new PluralFormat(arg0.id, format.ordinal, format.offset, self.compileOptions(arg0), pluralFn);
              tmp21 = tmp20;
              return tmp20;
            } else {
              str2 = "selectFormat";
              if ("selectFormat" === type) {
                tmp11 = SelectFormat;
                prototype3 = SelectFormat.prototype;
                tmp12 = new.target;
                tmp13 = new.target;
                tmp14 = new SelectFormat(arg0.id, self.compileOptions(arg0));
                tmp15 = tmp14;
                return tmp14;
              } else {
                tmp6 = globalThis;
                _Error = Error;
                prototype2 = Error.prototype;
                tmp7 = new.target;
                str3 = "Message element does not have a valid format type";
                tmp8 = new.target;
                error = new Error("Message element does not have a valid format type");
                tmp10 = error;
                throw error;
              }
            }
          }
        }
      }
    } else {
      tmp = StringFormat;
      prototype = StringFormat.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = new StringFormat(arg0.id);
      tmp5 = tmp4;
      return tmp4;
    }
  }
  compileOptions(arg0) {
    self = this;
    format = arg0.format;
    options = format.options;
    obj = {};
    pluralStack = this.pluralStack;
    arr = pluralStack.push(this.currentPlural);
    tmp2 = null;
    if ("pluralFormat" === format.type) {
      tmp2 = arg0;
    }
    self.currentPlural = tmp2;
    length = options.length;
    for (let num = 0; num < length; num = num + 1) {
      iter = options[num];
      obj[iter.selector] = self.compileMessage(iter.value);
    }
    pluralStack1 = self.pluralStack;
    self.currentPlural = pluralStack1.pop();
    return obj;
  }
}
class StringFormat {
  constructor(arg0) {
    this.id = arg0;
    return;
  }
  format(arg0) {
    str = "";
    if (arg0) {
      str2 = "string";
      StringResult = arg0;
      if ("string" !== typeof arg0) {
        tmp2 = globalThis;
        _String = String;
        StringResult = String(arg0);
      }
      str = StringResult;
    }
    return str;
  }
}
class PluralFormat {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    this.id = arg0;
    this.useOrdinal = arg1;
    this.offset = arg2;
    this.options = arg3;
    this.pluralFn = arg4;
    return;
  }
  getOption(arg0) {
    self = this;
    options = this.options;
    tmp = options["=" + arg0] || options[self.pluralFn(self, arg0 - self.offset, self.useOrdinal)] || options.other;
    return tmp;
  }
}
class PluralOffsetString {
  constructor(arg0, arg1, arg2, arg3) {
    this.id = arg0;
    this.offset = arg1;
    this.numberFormat = arg2;
    this.string = arg3;
    return;
  }
  format(arg0) {
    numberFormat = this.numberFormat;
    str = this.string;
    str2 = str.replace(/(^|[^\\])#/g, `$1${numberFormat.format(arg0 - this.offset)}`);
    return str2.replace(/\\#/g, "#");
  }
}
class SelectFormat {
  constructor(arg0, arg1) {
    this.id = arg0;
    this.options = arg1;
    return;
  }
  getOption(arg0) {
    options = this.options;
    tmp = options[arg0] || options.other;
    return tmp;
  }
}
arg5.default = Compiler;
