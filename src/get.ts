import { getSettings } from './get-settings';

export async function get
  <SettingsSchema extends {}, K  extends keyof SettingsSchema = keyof SettingsSchema>
  (key: K): Promise<SettingsSchema[K]>
{
  return (await getSettings<SettingsSchema>()).settings[key];
}