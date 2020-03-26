import { UserDB } from "../../../data/userDB";

export class DeleteUserUC {
  constructor(private userDB: UserDB) {}

  public async execute(input: DeleteUserUCInput): Promise<void> {
    if (!input.id) {
      throw new Error("UserId is invalid");
    }

    const user = await this.userDB.getUserById(input.id);
    if (!user) {
      throw new Error("User not found");
    }

    await this.userDB.deleteUser(input.id);
  }
}

export interface DeleteUserUCInput {
  id: string;
}
