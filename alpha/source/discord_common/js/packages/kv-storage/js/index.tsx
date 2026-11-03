// Module ID: 5020
// Function ID: 5021
// Dependencies: [5021, 2, 5023, 5027, 5030, 5031, 5032, 5033, 5034, 5035, 5024, 5026]

// Module 5020
import Dao from "Dao" /* 5023 */;
import Table from "Table" /* 5024 */;
import TableId from "TableId" /* 5026 */;
import Database from "Database" /* 5027 */;
import EntityDao from "EntityDao" /* 5030 */;
import GuildDao from "GuildDao" /* 5031 */;
import GuildEntityDao from "GuildEntityDao" /* 5032 */;
import Kv from "Kv" /* 5033 */;
import MessageDao from "MessageDao" /* 5034 */;
import api_Stats from "api/Stats" /* 5035 */;
import "module_5021";
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/index.tsx");
for (const key10020 in Dao) {
  exports[key10020] = Dao[key10020];
  continue;
}
for (const key10024 in Database) {
  exports[key10024] = Database[key10024];
  continue;
}
for (const key10028 in EntityDao) {
  exports[key10028] = EntityDao[key10028];
  continue;
}
for (const key10032 in GuildDao) {
  exports[key10032] = GuildDao[key10032];
  continue;
}
for (const key10036 in GuildEntityDao) {
  exports[key10036] = GuildEntityDao[key10036];
  continue;
}
for (const key10040 in Kv) {
  exports[key10040] = Kv[key10040];
  continue;
}
for (const key10044 in MessageDao) {
  exports[key10044] = MessageDao[key10044];
  continue;
}
for (const key10048 in api_Stats) {
  exports[key10048] = api_Stats[key10048];
  continue;
}
for (const key10052 in Table) {
  exports[key10052] = Table[key10052];
  continue;
}
for (const key10056 in TableId) {
  exports[key10056] = TableId[key10056];
  continue;
}
