// Module ID: 4566
// Function ID: 40045
// Name: TRUE_OPTION_NAME
// Dependencies: [1212, 1881, 2]
// Exports: getValidationErrorText

// Module 4566 (TRUE_OPTION_NAME)
const items = [{ name: "True", displayName: "True", value: "true" }, { name: "False", displayName: "False", value: "false" }];
const frozen = Object.freeze([]);
const frozen1 = Object.freeze([]);
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandConstants.tsx");

export const TRUE_OPTION_NAME = "True";
export const FALSE_OPTION_NAME = "False";
export const BOOLEAN_CHOICES = items;
export const BuiltInSectionId = { BUILT_IN: "-1", FRECENCY: "-2" };
export const DISCOVERY_COMMANDS_QUERY_LIMIT_WEB = 10;
export const DISCOVERY_COMMANDS_QUERY_LIMIT_MOBILE = 5;
export const DISCOVERY_COMMANDS_QUERY_LIMIT = 5;
export const DISCOVERY_COMMANDS_FRECENCY_LIMIT = 5;
export const DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT = 25;
export const SUB_COMMAND_KEY_SEPARATOR = "\0";
export const APPLICATION_COMMAND_PERMISSIONS_LIMIT = 100;
export const MAX_SUBCOMMAND_LEVEL = 3;
export const CONTEXT_MENU_COMMANDS_QUERY_LIMIT = 10;
export const AUTOCOMPLETE_OPTION_DEBOUNCE_TIME = 500;
export const EMPTY_COMMANDS = frozen;
export const EMPTY_COMMANDS_SECTION = frozen1;
export const APPLICATION_USER_INSTALL_BETA_USER_LIMIT = 200;
export const getValidationErrorText = function getValidationErrorText(option) {
  if (null != option.choices) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.xi5aah);
  } else {
    const type = option.type;
    if (require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.BOOLEAN === type) {
      const intl8 = require(1212) /* getSystemLocale */.intl;
      return intl8.string(require(1212) /* getSystemLocale */.t.ATIx6O);
    } else if (require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.CHANNEL === type) {
      const intl7 = require(1212) /* getSystemLocale */.intl;
      return intl7.string(require(1212) /* getSystemLocale */.t.Q0z2Gx);
    } else if (require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.INTEGER === type) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      return intl6.string(require(1212) /* getSystemLocale */.t["d/9Rk4"]);
    } else if (require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.NUMBER === type) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      return intl5.string(require(1212) /* getSystemLocale */.t["FDyk/V"]);
    } else if (require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.ROLE === type) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      return intl4.string(require(1212) /* getSystemLocale */.t.vrRQn0);
    } else if (require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.USER === type) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      return intl3.string(require(1212) /* getSystemLocale */.t.i2r7j5);
    } else if (require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.MENTIONABLE === type) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      return intl2.string(require(1212) /* getSystemLocale */.t.I7imec);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.EkDo1i);
    }
  }
};
