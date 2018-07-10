using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace App.Web.Models
{
  public class TestContext : DbContext
  {
    public TestContext(DbContextOptions<TestContext> options)
      : base(options) { }

    public DbSet<Hero> Heroes { get; set; }
  }

  public class Hero
  {
    public int Id { get; set; }
    public string Name { get; set; }
  }
}
