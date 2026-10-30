// Module ID: 12829
// Function ID: 12830
// Dependencies: []

// Module 12829
function noop() {

}

export default function(type, enter, arg2) {
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let tmp4;
  let tmp5;
  let closure_0 = arg2;
  enter = noop;
  let leave = noop;
  if (typeof enter === "function") {
    obj = tmp;
    obj2 = enter;
    obj3 = tmp;
    obj4 = enter;
    tmp4 = tmp;
    tmp5 = enter;
  } else {
    obj = tmp;
    obj2 = tmp;
    obj3 = tmp;
    obj4 = tmp;
    tmp4 = tmp;
    tmp5 = tmp;
    if (enter) {
      enter = enter.enter;
      let tmp2 = tmp;
      if (typeof enter === "function") {
        tmp2 = enter;
      }
      enter = tmp2;
      leave = enter.leave;
      let tmp3 = tmp;
      if (typeof leave === "function") {
        tmp3 = leave;
      }
      leave = tmp3;
      obj = tmp3;
      obj2 = tmp2;
      obj3 = tmp3;
      obj4 = tmp2;
      tmp4 = tmp3;
      tmp5 = tmp2;
    }
  }
  if (tmp5 === noop) {
    if (tmp4 === noop) {
      const _Error3 = Error;
      const self5 = this;
      const self6 = this;
      let error = new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
      throw error;
    }
  }
  function walk(term) {
    enter.call(closure_0, term);
    switch (term.type) {
      case "Group":
      {
        const terms = term.terms;
        const item = terms.forEach(walk);
        leave.call(closure_0, term);
        break;
      }
      case "Multiplier":
      {
        walk(term.term);
        break;
      }
      case "Type":
      {
        break;
      }
      case "Property":
      {
        break;
      }
      case "Keyword":
      {
        break;
      }
      case "AtKeyword":
      {
        break;
      }
      case "Function":
      {
        break;
      }
      case "String":
      {
        break;
      }
      case "Token":
      {
        break;
      }
      case "Comma":
      {
        break;
      }
      default:
      {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unknown type: " + term.type);
        throw error;
      }
    }
  }
  obj4.call(arg2, type);
  switch (type.type) {
    case "Group":
    {
      let terms = type.terms;
      let item = terms.forEach(walk);
      obj3.call(arg2, type);
      break;
    }
    case "Multiplier":
    {
      const term = type.term;
      obj2.call(arg2, term);
      switch (term.type) {
        case "Group":
        {
          const terms1 = term.terms;
          const item1 = terms1.forEach(walk);
          obj.call(arg2, term);
          break;
        }
        case "Multiplier":
        {
          walk(term.term);
          break;
        }
        case "Type":
        {
          break;
        }
        case "Property":
        {
          break;
        }
        case "Keyword":
        {
          break;
        }
        case "AtKeyword":
        {
          break;
        }
        case "Function":
        {
          break;
        }
        case "String":
        {
          break;
        }
        case "Token":
        {
          break;
        }
        case "Comma":
        {
          break;
        }
        default:
        {
          let _Error = Error;
          let self = this;
          let self2 = this;
          const error1 = new Error("Unknown type: " + term.type);
          throw error1;
        }
      }
      break;
    }
    case "Type":
    {
      break;
    }
    case "Property":
    {
      break;
    }
    case "Keyword":
    {
      break;
    }
    case "AtKeyword":
    {
      break;
    }
    case "Function":
    {
      break;
    }
    case "String":
    {
      break;
    }
    case "Token":
    {
      break;
    }
    case "Comma":
    {
      break;
    }
    default:
    {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error2 = new Error("Unknown type: " + type.type);
      throw error2;
    }
  }
};
