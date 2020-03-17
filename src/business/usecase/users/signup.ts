import { v4 } from "uuid";
import { User } from "../../entities/user";
import {UserGateway} from "../../gateways/userGateway"
import { IdGateway } from "../../gateways/idGateway";

export class SignupUC{
  constructor(private userGateway: UserGateway) {}

  public async execute(input: SignupUCInput): Promise<SignupUCOutput> {
    
    const id = v4();

    if (input.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const birthDate = new Date(input.birthDate + " 00:00");

    if (Object.is(birthDate.getFullYear(), NaN)) {
      throw new Error("Invalid date");
    }

    await this.userGateway.createUser(
      new User(id, input.name, input.email, birthDate)
    );

    return {
      id,
      name: input.name,
      email: input.email,
      birthDate
    };
  }
}

export interface SignupUCInput {
  name: string;
  email: string;
  birthDate: string;
}

export interface SignupUCOutput {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
}
