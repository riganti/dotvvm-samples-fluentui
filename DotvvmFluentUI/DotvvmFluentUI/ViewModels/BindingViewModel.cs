using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;

namespace DotvvmFluentUI.ViewModels
{
    public class BindingViewModel : MasterPageViewModel
    {

        public int Progress { get; set; } = 30;

        public bool Checked { get; set; }

        public void Save()
        {
            Progress = 100;
        }
    }
}

