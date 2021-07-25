import { getSettings } from './get-settings';
import { saveSettings } from './save-settings';

export async function set
  <SettingsSchema extends any, K extends keyof SettingsSchema>
  (key: K, value: SettingsSchema[K]): Promise<SettingsSchema>
{
  const settings = await getSettings<SettingsSchema>();

  settings.settings[key] = value;
  await saveSettings<SettingsSchema>(settings.settings, settings.path);

  return settings.settings;
}
