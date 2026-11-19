// Module ID: 4671
// Function ID: 4672
// Dependencies: [4672, 2, 4674, 4678, 4681, 4682, 4683, 4684, 4685, 4686, 4675, 4677]

// Module 4671
import Dao from "Dao" /* 4674 */;
import Table from "Table" /* 4675 */;
import TableId from "TableId" /* 4677 */;
import Database from "Database" /* 4678 */;
import EntityDao from "EntityDao" /* 4681 */;
import GuildDao from "GuildDao" /* 4682 */;
import GuildEntityDao from "GuildEntityDao" /* 4683 */;
import Kv from "Kv" /* 4684 */;
import MessageDao from "MessageDao" /* 4685 */;
import api_Stats from "api/Stats" /* 4686 */;
import "module_4672";
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
