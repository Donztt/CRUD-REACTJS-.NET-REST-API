﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Cadastro.Model
{
    [Table("LOGIN")]
    public class Login
    {
        [Column("ID")]
        public int Id { get; set; }
        [Column("LOGIN")]
        public string LoginNome { get; set; }
        [Column("SENHA")]
        public string Senha { get; set; }
        [Column("PESSOA_ID")]
        public int Pessoa_id { get; set; }
    }
}
