// Module ID: 4882
// Function ID: 4883
// Dependencies: [4883, 2, 4885, 4889, 4892, 4893, 4894, 4895, 4896, 4897, 4886, 4888]

// Module 4882
import Dao from "Dao" /* 4885 */;
import Table from "Table" /* 4886 */;
import TableId from "TableId" /* 4888 */;
import Database from "Database" /* 4889 */;
import EntityDao from "EntityDao" /* 4892 */;
import GuildDao from "GuildDao" /* 4893 */;
import GuildEntityDao from "GuildEntityDao" /* 4894 */;
import Kv from "Kv" /* 4895 */;
import MessageDao from "MessageDao" /* 4896 */;
import api_Stats from "api/Stats" /* 4897 */;
import "module_4883";
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
