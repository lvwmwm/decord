// Module ID: 914
// Function ID: 10023
// Name: extractPartyInfo
// Dependencies: [77, 912, 915, 916]
// Exports: buildClientAttributesFromInfo, buildServerAttributesFromInfo, buildTransportAttributes, extractSessionDataFromInitializeRequest, extractSessionDataFromInitializeResponse

// Module 914 (extractPartyInfo)
import _defineProperty from "_defineProperty";

function extractPartyInfo(clientInfo) {
  const obj = {};
  if (obj2.isValidContentItem(clientInfo)) {
    if ("string" === typeof clientInfo.name) {
      obj.name = clientInfo.name;
    }
    if ("string" === typeof clientInfo.title) {
      obj.title = clientInfo.title;
    }
    if ("string" === typeof clientInfo.version) {
      obj.version = clientInfo.version;
    }
  }
  return obj;
}
function getClientAttributes(transport) {
  let obj = require(915) /* weakMap */;
  const clientInfoForTransport = obj.getClientInfoForTransport(transport);
  obj = {};
  if (tmp2) {
    obj["mcp.client.name"] = clientInfoForTransport.name;
  }
  if (tmp3) {
    obj["mcp.client.title"] = clientInfoForTransport.title;
  }
  if (tmp4) {
    obj["mcp.client.version"] = clientInfoForTransport.version;
  }
  return obj;
}
function getServerAttributes(transport) {
  let obj = require(915) /* weakMap */;
  const sessionDataForTransport = obj.getSessionDataForTransport(transport);
  let serverInfo;
  if (null != sessionDataForTransport) {
    serverInfo = sessionDataForTransport.serverInfo;
  }
  obj = {};
  if (tmp3) {
    obj[require(916).MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  if (tmp6) {
    obj[require(916).MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  if (tmp9) {
    obj[require(916).MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return obj;
}
function extractClientInfo(requestInfo) {
  const obj = {};
  let remoteAddress;
  if (null != requestInfo) {
    requestInfo = requestInfo.requestInfo;
    if (null != requestInfo) {
      remoteAddress = requestInfo.remoteAddress;
    }
  }
  if (!remoteAddress) {
    let clientAddress;
    if (null != requestInfo) {
      clientAddress = requestInfo.clientAddress;
    }
    remoteAddress = clientAddress;
  }
  if (!remoteAddress) {
    let ip;
    if (null != requestInfo) {
      const request = requestInfo.request;
      if (null != request) {
        ip = request.ip;
      }
    }
    remoteAddress = ip;
  }
  if (!remoteAddress) {
    let remoteAddress1;
    if (null != requestInfo) {
      const request2 = requestInfo.request;
      if (null != request2) {
        const connection = request2.connection;
        if (null != connection) {
          remoteAddress1 = connection.remoteAddress;
        }
      }
    }
    remoteAddress = remoteAddress1;
  }
  obj.address = remoteAddress;
  let remotePort;
  if (null != requestInfo) {
    const requestInfo2 = requestInfo.requestInfo;
    if (null != requestInfo2) {
      remotePort = requestInfo2.remotePort;
    }
  }
  if (!remotePort) {
    let clientPort;
    if (null != requestInfo) {
      clientPort = requestInfo.clientPort;
    }
    remotePort = clientPort;
  }
  if (!remotePort) {
    let remotePort1;
    if (null != requestInfo) {
      const request3 = requestInfo.request;
      if (null != request3) {
        const connection2 = request3.connection;
        if (null != connection2) {
          remotePort1 = connection2.remotePort;
        }
      }
    }
    remotePort = remotePort1;
  }
  obj.port = remotePort;
  return obj;
}
function getTransportTypes(transport) {
  if (null != transport) {
    if (transport.constructor) {
      const constructor = transport.constructor;
      let name;
      if (null != constructor) {
        name = constructor.name;
      }
      let str3 = "unknown";
      if ("string" === typeof name) {
        str3 = transport.constructor.name;
      }
      const formatted = str3.toLowerCase();
      let str5 = "pipe";
      if (!formatted.includes("stdio")) {
        let hasItem = formatted.includes("http");
        if (!hasItem) {
          hasItem = formatted.includes("sse");
        }
        str5 = "unknown";
        if (hasItem) {
          str5 = "tcp";
        }
      }
      const obj = { mcpTransport: str3, networkTransport: str5 };
      return obj;
    }
  }
  return { mcpTransport: "unknown", networkTransport: "unknown" };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildClientAttributesFromInfo = function buildClientAttributesFromInfo(clientInfo) {
  const obj = {};
  if (tmp) {
    obj["mcp.client.name"] = clientInfo.name;
  }
  if (tmp2) {
    obj["mcp.client.title"] = clientInfo.title;
  }
  if (tmp3) {
    obj["mcp.client.version"] = clientInfo.version;
  }
  return obj;
};
export const buildServerAttributesFromInfo = function buildServerAttributesFromInfo(serverInfo) {
  const obj = {};
  if (tmp) {
    obj[require(916).MCP_SERVER_NAME_ATTRIBUTE] = serverInfo.name;
  }
  if (tmp4) {
    obj[require(916).MCP_SERVER_TITLE_ATTRIBUTE] = serverInfo.title;
  }
  if (tmp7) {
    obj[require(916).MCP_SERVER_VERSION_ATTRIBUTE] = serverInfo.version;
  }
  return obj;
};
export const buildTransportAttributes = function buildTransportAttributes(transport, extra) {
  let mcpTransport;
  let networkTransport;
  let sessionId;
  if (transport) {
    if ("sessionId" in transport) {
      sessionId = transport.sessionId;
    }
  }
  if (extra) {
    let obj = extractClientInfo(extra);
  } else {
    obj = {};
  }
  ({ mcpTransport, networkTransport } = getTransportTypes(transport));
  const tmp3 = getTransportTypes(transport);
  const tmp4 = getClientAttributes(transport);
  const tmp5 = getServerAttributes(transport);
  const protocolVersionForTransport = require(915) /* weakMap */.getProtocolVersionForTransport(transport);
  let tmp7 = sessionId;
  if (sessionId) {
    tmp7 = _defineProperty({}, require(916).MCP_SESSION_ID_ATTRIBUTE, sessionId);
  }
  let address = obj.address;
  if (address) {
    address = _defineProperty({}, require(916).CLIENT_ADDRESS_ATTRIBUTE, obj.address);
  }
  let port = obj.port;
  if (port) {
    port = _defineProperty({}, require(916).CLIENT_PORT_ATTRIBUTE, obj.port);
  }
  const obj2 = require(915) /* weakMap */;
  const tmp17 = _defineProperty({}, require(916).MCP_TRANSPORT_ATTRIBUTE, mcpTransport);
  const tmp18 = _defineProperty(_defineProperty({}, require(916).MCP_TRANSPORT_ATTRIBUTE, mcpTransport), require(916).NETWORK_TRANSPORT_ATTRIBUTE, networkTransport);
  let tmp20 = protocolVersionForTransport;
  if (protocolVersionForTransport) {
    tmp20 = _defineProperty({}, require(916).MCP_PROTOCOL_VERSION_ATTRIBUTE, protocolVersionForTransport);
  }
  return Object.assign({}, tmp7, address, port, _defineProperty(_defineProperty(_defineProperty({}, require(916).MCP_TRANSPORT_ATTRIBUTE, mcpTransport), require(916).NETWORK_TRANSPORT_ATTRIBUTE, networkTransport), require(916).NETWORK_PROTOCOL_VERSION_ATTRIBUTE, "2.0"), tmp20, tmp4, tmp5);
};
export { extractClientInfo };
export const extractSessionDataFromInitializeRequest = function extractSessionDataFromInitializeRequest(params) {
  const obj = {};
  if (obj2.isValidContentItem(params.params)) {
    if ("string" === typeof params.params.protocolVersion) {
      obj.protocolVersion = params.params.protocolVersion;
    }
    if (params.params.clientInfo) {
      obj.clientInfo = extractPartyInfo(params.params.clientInfo);
    }
  }
  return obj;
};
export const extractSessionDataFromInitializeResponse = function extractSessionDataFromInitializeResponse(result) {
  const obj = {};
  if (obj2.isValidContentItem(result)) {
    if ("string" === typeof result.protocolVersion) {
      obj.protocolVersion = result.protocolVersion;
    }
    if (result.serverInfo) {
      obj.serverInfo = extractPartyInfo(result.serverInfo);
    }
  }
  return obj;
};
export { getClientAttributes };
export { getServerAttributes };
export { getTransportTypes };
