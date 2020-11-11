import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satysifying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

console.log(`Man United won ${manUnitedWins} games`);
