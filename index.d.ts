export default function generateRandomProfile(): {
  first_name: string;
  last_name: string;
  countries: string[];
  gender: string;
  age: number;
  height: number;
  weight: number;
  hairstyle: string;
};

export enum Race {
    Caucasian = 'Caucasian',
    Hispanic = 'Hispanic',
    African = 'African',
    MiddleEastern = 'MiddleEastern',
    SouthAsian = 'SouthAsian',
    EastAsian = 'EastAsian',
    SoutheastAsian = 'SoutheastAsian',
    PacificIslander = 'PacificIslander',
}