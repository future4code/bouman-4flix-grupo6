import { PostDB } from "../../../data/postDB";
import { PostType } from "../../entities/post";
export class GetPostByIdUC {
  constructor(private db: PostDB) {}

  public async execute(input: GetPostByIdUCInput): Promise<void> {
    /**
     * ISSUE 2
     *
     * Perceba que a Presentation e o DataBase já estão preparados,
     * você deve terminar o UseCase (lembre-se de colcar a saída correta)
     */
  }
}

export interface GetPostByIdUCInput {
  id: string;
}

export interface GetPostByIdUCOutput {
  id: string;
  title: string;
  content: string;
  image?: string;
  type: PostType;
  userId: string;
  userName: string;
}
