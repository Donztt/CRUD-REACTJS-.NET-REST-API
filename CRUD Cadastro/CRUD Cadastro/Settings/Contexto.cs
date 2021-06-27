﻿using CRUD_Cadastro.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Cadastro.Settings
{
    public class Contexto: DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }
        
        public DbSet<Pessoa> Pessoa { get; set; }
        public DbSet<Login> Login { get; set; }
    }
}
