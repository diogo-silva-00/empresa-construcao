export interface Funcionario {
  id_funcionario: number;
  nome: string;
  email: string;
  data_nascimento?: string;
  ativo_inativo: boolean;
  id_cargo: number;
  nome_cargo: string;
  data_inicio: string;
  data_fim?: string;
  salario: number;
  telefone: string;
  endereco: string;
}
