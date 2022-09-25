import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'date' })
  birthday: string;

  @Column({ type: 'varchar', length: 255 })
  phoneNumber: string;
}
