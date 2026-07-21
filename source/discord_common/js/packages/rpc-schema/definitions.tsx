// Module ID: 13281
// Function ID: 100864
// Name: Activity
// Dependencies: []

// Module 13281 (Activity)
let obj = {
  request: undefined,
  response(string) {
    const obj = { image_url: string.string().required() };
    return obj;
  }
};
obj = {
  response: undefined,
  request(string) {
    const obj = {};
    const stringResult = string.string();
    obj.mediaUrl = string.string().required().max(1024);
    return obj;
  }
};
obj = {
  request(string) {
    const obj = {};
    const stringResult = string.string();
    obj.access_token = string.string().allow(null).optional();
    return obj;
  },
  response(string) {
    let obj = { access_token: string.string().required() };
    obj = {};
    const stringResult = string.string();
    obj.username = string.string().required();
    const stringResult1 = string.string();
    obj.discriminator = string.string().required();
    const stringResult2 = string.string();
    obj.id = string.string().required();
    const stringResult3 = string.string();
    obj.avatar = string.string().allow(null);
    const stringResult4 = string.string();
    obj.public_flags = string.number().required();
    const numberResult = string.number();
    obj.global_name = string.string().allow(null);
    let objectResult = string.object(obj);
    obj.user = objectResult.required();
    let arrayResult = string.array();
    const stringResult5 = string.string();
    const stringResult6 = string.string();
    const items = [...require(dependencyMap[0]).joiEnum(closure_0(closure_1[1]).OAuth2Scopes)];
    const obj12 = require(dependencyMap[0]);
    obj.scopes = arrayResult.items(stringResult6.valid.apply(items)).required();
    const itemsResult = arrayResult.items(stringResult6.valid.apply(items));
    obj.expires = string.string().required();
    obj = {};
    const stringResult7 = string.string();
    obj.description = string.string().required();
    const stringResult8 = string.string();
    obj.icon = string.string().allow(null);
    const stringResult9 = string.string();
    obj.id = string.string().required();
    arrayResult = string.array();
    const stringResult10 = string.string();
    obj.rpc_origins = arrayResult.items(string.string()).optional();
    const itemsResult1 = arrayResult.items(string.string());
    obj.name = string.string().required();
    objectResult = string.object(obj);
    obj.application = objectResult.required();
    return obj;
  }
};
function Activity(string) {
  let obj = { session_id: string.string().optional() };
  const stringResult = string.string();
  obj.type = string.number().optional();
  const numberResult = string.number();
  obj.name = string.string().required();
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj.url = string.string().allow(null).optional();
  const allowResult = string.string().allow(null);
  obj.application_id = string.string().optional();
  const stringResult3 = string.string();
  obj.status_display_type = string.number().optional();
  const numberResult1 = string.number();
  obj.state = string.string().optional();
  const stringResult4 = string.string();
  obj.state_url = string.string().optional();
  const stringResult5 = string.string();
  obj.details = string.string().optional();
  const stringResult6 = string.string();
  obj.details_url = string.string().optional();
  obj = {};
  const stringResult7 = string.string();
  obj.name = string.string().required();
  const stringResult8 = string.string();
  const stringResult9 = string.string();
  obj.id = string.string().allow(null).optional();
  const allowResult1 = string.string().allow(null);
  const boolResult = string.bool();
  obj.animated = string.bool().optional().allow(null);
  let objectResult = string.object(obj);
  const optionalResult = string.bool().optional();
  obj.emoji = objectResult.allow(null).optional();
  obj = {};
  const allowResult2 = objectResult.allow(null);
  obj.large_image = string.string().optional();
  const stringResult10 = string.string();
  obj.large_text = string.string().optional();
  const stringResult11 = string.string();
  obj.large_url = string.string().optional();
  const stringResult12 = string.string();
  obj.small_image = string.string().optional();
  const stringResult13 = string.string();
  obj.small_text = string.string().optional();
  const stringResult14 = string.string();
  obj.small_url = string.string().optional();
  objectResult = string.object(obj);
  obj.assets = objectResult.optional();
  const obj1 = {};
  const stringResult15 = string.string();
  obj1.start = string.number().optional();
  const numberResult2 = string.number();
  obj1.end = string.number().optional();
  const numberResult3 = string.number();
  obj.timestamps = string.object(obj1).optional();
  const obj2 = {};
  const objectResult1 = string.object(obj1);
  obj2.id = string.string().optional();
  let arrayResult = string.array();
  const stringResult16 = string.string();
  const itemsResult = arrayResult.items(string.number());
  obj2.size = arrayResult.items(string.number()).length(2).optional();
  const lengthResult = arrayResult.items(string.number()).length(2);
  obj2.privacy = string.number().optional();
  const numberResult4 = string.number();
  obj.party = string.object(obj2).optional();
  const obj3 = {};
  const objectResult2 = string.object(obj2);
  obj3.match = string.string().optional();
  const stringResult17 = string.string();
  obj3.join = string.string().optional();
  const stringResult18 = string.string();
  obj.secrets = string.object(obj3).optional();
  const objectResult3 = string.object(obj3);
  obj.sync_id = string.string().optional();
  const stringResult19 = string.string();
  obj.created_at = string.number().optional();
  const numberResult5 = string.number();
  obj.instance = string.bool().optional();
  const boolResult1 = string.bool();
  obj.flags = string.number().optional();
  const numberResult6 = string.number();
  obj.metadata = string.object().optional();
  const objectResult4 = string.object();
  obj.platform = string.string().optional();
  arrayResult = string.array();
  const stringResult20 = string.string();
  obj.supported_platforms = arrayResult.items(string.string()).optional();
  const itemsResult1 = arrayResult.items(string.string());
  const arrayResult1 = string.array();
  obj.buttons = string.array().items(string.string()).optional();
  const itemsResult2 = string.array().items(string.string());
  obj.hangStatus = string.string().optional();
  return string.object(obj);
}
function User(string) {
  let obj = {};
  const stringResult = string.string();
  obj.id = string.string().required().description("User ID");
  const requiredResult = string.string().required();
  obj.username = string.string().required();
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj.global_name = string.string().allow(null).description("Global Discord name. Not unique.");
  const allowResult = string.string().allow(null);
  const stringResult3 = string.string();
  obj.discriminator = string.string().required().description("Global name discriminator. Will be 0 if a unique username");
  const requiredResult1 = string.string().required();
  const stringResult4 = string.string();
  obj.avatar = string.string().allow(null).description("User Avatar ID");
  const allowResult1 = string.string().allow(null);
  const numberResult = string.number();
  obj.flags = string.number().required().description("Public user flags");
  const requiredResult2 = string.number().required();
  const boolResult = string.bool();
  obj.bot = string.bool().required().description("If a bot user.");
  obj = {};
  const requiredResult3 = string.bool().required();
  obj.asset = string.string().allow(null);
  obj.skuId = string.string();
  obj.expiresAt = string.number();
  let objectResult = string.object(obj);
  const stringResult5 = string.string();
  obj.avatar_decoration_data = objectResult.allow(null).description("Details about avatar decoration");
  const allowResult2 = objectResult.allow(null);
  const numberResult1 = string.number();
  obj.premium_type = string.number().allow(null).description("Nitro premium type");
  objectResult = string.object(obj);
  return objectResult.description("Discord User");
}
function ActionRowComponent(number) {
  const obj = {};
  const numberResult = number.number();
  obj.type = number.number().valid(1).required();
  const validResult = number.number().valid(1);
  const arrayResult = number.array();
  obj.components = number.array().max(5).items(ButtonComponent(number));
  return number.object(obj);
}
function ButtonComponent(number) {
  const obj = {};
  const numberResult = number.number();
  obj.type = number.number().valid(2).required();
  const validResult = number.number().valid(2);
  const numberResult1 = number.number();
  const minResult = number.number().min(1);
  obj.style = number.number().min(1).max(5).required();
  const maxResult = number.number().min(1).max(5);
  const stringResult = number.string();
  obj.label = number.string().max(80).description("Text that appears on the button");
  const maxResult1 = number.string().max(80);
  const stringResult1 = number.string();
  obj.custom_id = number.string().max(100).description("Developer-defined identifier for the button; max 100 characters");
  return number.object(obj);
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/rpc-schema/definitions.tsx");

export const RPCCommandSchemas = {
  [require(dependencyMap[0]).RPCCommand.INITIATE_IMAGE_UPLOAD]: obj,
  [require(dependencyMap[0]).RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: obj,
  [require(dependencyMap[0]).RPCCommand.AUTHENTICATE]: obj,
  [require(dependencyMap[0]).RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
    request: undefined,
    response(array) {
      let obj = {};
      const arrayResult = array.array();
      obj = {};
      const obj3 = User(array);
      obj.nickname = array.string().description("Server nickname. Not unique.");
      const keys = obj3.keys(obj);
      const stringResult = array.string();
      obj.participants = arrayResult.items(keys.required()).required();
      return obj;
    }
  },
  [require(dependencyMap[0]).RPCCommand.SHARE_INTERACTION]: {
    request(string) {
      let obj = { command: string.string().required() };
      let arrayResult = string.array();
      obj = {};
      const stringResult = string.string();
      obj.name = string.string().required();
      const stringResult1 = string.string();
      obj.value = string.string().required();
      obj.options = arrayResult.items(string.object(obj));
      const stringResult2 = string.string();
      obj.content = string.string().max(2000);
      obj.require_launch_channel = string.boolean();
      obj = {};
      const stringResult3 = string.string();
      obj.height = string.number().required();
      const numberResult = string.number();
      obj.url = string.string().required();
      const stringResult4 = string.string();
      obj.width = string.number().required();
      obj.preview_image = string.object(obj);
      arrayResult = string.array();
      obj.components = arrayResult.items(ActionRowComponent(string));
      obj.pid = string.number();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    }
  },
  [require(dependencyMap[0]).RPCCommand.SHARE_LINK]: {
    request(string) {
      const obj = { custom_id: string.string().max(64) };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj.message = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj.link_id = string.string().max(64);
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      const booleanResult = boolean.boolean();
      obj.didCopyLink = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj.didSendMessage = boolean.boolean().required();
      return obj;
    }
  },
  [require(dependencyMap[0]).RPCCommand.GET_RELATIONSHIPS]: {
    request: undefined,
    response(array) {
      let obj = {};
      const arrayResult = array.array();
      obj = {};
      const requiredResult = array.array().required();
      obj.type = array.number().required();
      const numberResult = array.number();
      obj.user = User(array).required();
      obj = {};
      const obj6 = User(array);
      obj.status = array.string().required();
      const stringResult = array.string();
      obj.activity = Activity(array).allow(null);
      obj.presence = array.object(obj);
      obj.relationships = requiredResult.items(array.object(obj));
      return obj;
    }
  },
  [require(dependencyMap[0]).RPCCommand.INVITE_USER_EMBEDDED]: {
    request(string) {
      const obj = { user_id: string.string().required() };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj.content = string.string().min(0).max(1024);
      return obj;
    },
    response: undefined
  },
  [require(dependencyMap[0]).RPCCommand.GET_USER]: {
    request(string) {
      const obj = {};
      const stringResult = string.string();
      obj.id = string.string().max(64).required();
      return obj;
    },
    response(arg0) {
      return User(arg0).allow(null);
    }
  },
  [require(dependencyMap[0]).RPCCommand.GET_QUEST_ENROLLMENT_STATUS]: {
    request(string) {
      const obj = { quest_id: string.string().required() };
      return obj;
    },
    response(string) {
      const obj = { quest_id: string.string().required() };
      const stringResult = string.string();
      obj.is_enrolled = string.boolean().required();
      const booleanResult = string.boolean();
      const stringResult1 = string.string();
      obj.enrolled_at = string.string().allow(null).optional();
      return obj;
    }
  },
  [require(dependencyMap[0]).RPCCommand.QUEST_START_TIMER]: {
    request(string) {
      const obj = { quest_id: string.string().required() };
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    }
  },
  [require(dependencyMap[0]).RPCCommand.GET_QUEST]: {
    request: undefined,
    response(string) {
      const obj = { quest_id: string.string().required() };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj.enrolled_at = string.string().allow(null).optional();
      const allowResult = string.string().allow(null);
      const stringResult2 = string.string();
      obj.completed_at = string.string().allow(null).optional();
      const allowResult1 = string.string().allow(null);
      obj.external_cta_url = string.string().required();
      return obj;
    }
  },
  [require(dependencyMap[0]).RPCCommand.REQUEST_PROXY_TICKET_REFRESH]: {
    request: undefined,
    response(string) {
      const obj = { ticket: string.string().required() };
      return obj;
    }
  }
};
