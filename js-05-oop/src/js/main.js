//La importaciónes van al principio del archivo
import {changePrincipalTitle} from "./modules/changePrincipalTitle.js";
import {changeIcon} from "./modules/changeIcon.js"
import {aliceUser} from "./modules/literalObject.js";
import { User } from "../models/User.js";

changePrincipalTitle("title");
changeIcon("cat");

console.log( aliceUser.getFullName() );
console.log( aliceUser );
console.log( aliceUser.stringify() );

const fatima = new User ("Fátima", "Orozco", 25, "fati.orozco@hotmail.com");
const juan = new User ("Juan", "Pérez", 22, "juanpez@hotmail.com");
const luis = new User ("Luis", "CHávez", 25, "luischav@hotmail.com");

console.log(luis.greet())