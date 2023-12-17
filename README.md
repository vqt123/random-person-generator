
# Random Person Generator

This library allows you to generate random diverse fictional characters from around the globe.


```javascript
import { generateRandomProfile, generateRandomWomanProfile, generateRandomManProfile } from './index.js';

const profile = generateRandomProfile();
console.log(profile);

const womanProfile = generateRandomWomanProfile();
console.log(womanProfile);

const manProfile = generateRandomManProfile();
console.log(manProfile);
```

Output
```
{
  first_name: 'Somchai',
  last_name: 'Srisai',
  race: 'Asian',
  country: 'Thailand',
  gender: 'man',
  hair_color: 'Black'
}
{
  first_name: 'Sandra',
  last_name: 'Kalniņš',
  race: 'Caucasian',
  country: 'Latvia',
  gender: 'woman',
  hair_color: 'Brown'
}
{
  first_name: 'Gabriel',
  last_name: 'Lima',
  race: 'Hispanic',
  country: 'Brazil',
  gender: 'man',
  hair_color: 'Brown'
}

```
