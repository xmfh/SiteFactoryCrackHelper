using Microsoft.AspNet.Mvc;
using SiteFactoryHelpSite.Models;
using System.Diagnostics;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SiteFactoryHelpSite.Controllers
{
    public class CrackController : Controller
    {
        private static string Command = @"/C d:\toolkit\crack ";
        //private static string Command = @"/C  md d:\crackdemo ";
        // POST api/values
        [HttpPost]
        public IActionResult Crack(CrackInfo crackInfo)
        {
            string command = string.Format(Command + "\"{0}\" \"{1}\" \"{2}\" \"{3}\"", crackInfo.Version, crackInfo.Product, crackInfo.Domain, crackInfo.SN);

            Process process = Process.Start("CMD.exe", command);

            return Json(new { result = "success" });
           
        }
    }
}
