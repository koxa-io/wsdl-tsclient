/* eslint-disable @typescript-eslint/no-unused-vars */
import { parseWsdl } from './src/parser';

(async function ()
{
  const d = await parseWsdl('./test/resources/strict/EVacSyncService_SPClient.wsdl', { modelNamePreffix: '', modelNameSuffix: '' });
}());
