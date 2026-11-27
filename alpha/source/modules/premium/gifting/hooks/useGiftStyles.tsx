// Module ID: 11146
// Function ID: 11147
// Name: useGiftStyles
// Dependencies: [1389, 2]
// Exports: useGiftStyles

// Module 11146 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
}
