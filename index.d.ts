export interface Profile {
  first_name: string;
  last_name: string;
  race: string;
  country: string;
  gender: string;
  hair_color: string;
}

export interface Data {
  races: string[];
  raceToCountries: Record<string, string[]>;
  countryToFemaleNames: Record<string, string[]>;
  countryToMaleNames: Record<string, string[]>;
  countryToLastNames: Record<string, string[]>;
  raceToHairColors: Record<string, string[]>;
  genders: string[];
}

export function generateRandomWomanProfile(): Profile;

export function generateRandomManProfile(): Profile;

export function generateRandomProfile(): Profile;

export const data: Data;
