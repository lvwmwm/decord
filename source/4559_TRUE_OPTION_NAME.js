// Module ID: 4559
// Function ID: 39950
// Name: TRUE_OPTION_NAME
// Dependencies: []
// Exports: getValidationErrorText

// Module 4559 (TRUE_OPTION_NAME)
const items = [{ "Bool(true)": true, "Bool(true)": true, "Bool(true)": true }, {}];
const frozen = Object.freeze([]);
const frozen1 = Object.freeze([]);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/application_commands/ApplicationCommandConstants.tsx");

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
    const intl9 = require(dependencyMap[0]).intl;
    return intl9.string(require(dependencyMap[0]).t.xi5aah);
  } else {
    const type = option.type;
    if (require(dependencyMap[1]).ApplicationCommandOptionType.BOOLEAN === type) {
      const intl8 = require(dependencyMap[0]).intl;
      return intl8.string(require(dependencyMap[0]).t.ATIx6O);
    } else if (require(dependencyMap[1]).ApplicationCommandOptionType.CHANNEL === type) {
      const intl7 = require(dependencyMap[0]).intl;
      return intl7.string(require(dependencyMap[0]).t.Q0z2Gx);
    } else if (require(dependencyMap[1]).ApplicationCommandOptionType.INTEGER === type) {
      const intl6 = require(dependencyMap[0]).intl;
      return intl6.string(require(dependencyMap[0]).t.d/9Rk4);
    } else if (require(dependencyMap[1]).ApplicationCommandOptionType.NUMBER === type) {
      const intl5 = require(dependencyMap[0]).intl;
      return intl5.string(require(dependencyMap[0]).t.FDyk/V);
    } else if (require(dependencyMap[1]).ApplicationCommandOptionType.ROLE === type) {
      const intl4 = require(dependencyMap[0]).intl;
      return intl4.string(require(dependencyMap[0]).t.vrRQn0);
    } else if (require(dependencyMap[1]).ApplicationCommandOptionType.USER === type) {
      const intl3 = require(dependencyMap[0]).intl;
      return intl3.string(require(dependencyMap[0]).t.i2r7j5);
    } else if (require(dependencyMap[1]).ApplicationCommandOptionType.MENTIONABLE === type) {
      const intl2 = require(dependencyMap[0]).intl;
      return intl2.string(require(dependencyMap[0]).t.I7imec);
    } else {
      const intl = require(dependencyMap[0]).intl;
      return intl.string(require(dependencyMap[0]).t.EkDo1i);
    }
  }
};
