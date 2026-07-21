// Module ID: 4584
// Function ID: 40180
// Name: staticRouteToTranslation
// Dependencies: []
// Exports: staticRouteToItemString, staticRouteToTranslation

// Module 4584 (staticRouteToTranslation)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/markup/StaticRouteRendering.tsx");

export const staticRouteToTranslation = function staticRouteToTranslation(arg0) {
  if ("home" !== arg0) {
    if ("guide" !== arg0) {
      if ("browse" === arg0) {
        const intl3 = arg1(dependencyMap[1]).intl;
        return intl3.string(arg1(dependencyMap[1]).t.et6wav);
      } else if ("customize" === arg0) {
        const intl2 = arg1(dependencyMap[1]).intl;
        return intl2.string(arg1(dependencyMap[1]).t.h9mGOP);
      } else if ("linked-roles" === arg0) {
        const intl = arg1(dependencyMap[1]).intl;
        return intl.string(arg1(dependencyMap[1]).t.ghtnss);
      } else {
        return null;
      }
    }
  }
  const intl4 = arg1(dependencyMap[1]).intl;
  return intl4.string(arg1(dependencyMap[1]).t.VbpLyU);
};
export const staticRouteToItemString = function staticRouteToItemString(arg0, arg1, id) {
  if ("linked-roles" === arg0) {
    if (null == id) {
      return null;
    } else {
      const role = role.getRole(id, arg1);
      let name = null;
      if (null != role) {
        const tags = role.tags;
        let guild_connections;
        if (null != tags) {
          guild_connections = tags.guild_connections;
        }
        name = null;
        if (null === guild_connections) {
          name = role.name;
        }
      }
      return name;
    }
  } else {
    return null;
  }
};
