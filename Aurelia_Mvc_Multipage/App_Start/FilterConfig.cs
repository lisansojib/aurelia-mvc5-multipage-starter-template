using System.Web;
using System.Web.Mvc;

namespace Aurelia_Mvc_Multipage
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
