using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;

namespace DotvvmFluentUI.ViewModels
{
    public class CollectionsViewModel : MasterPageViewModel
    {

        public List<CollectionItem> Items { get; set; } = new List<CollectionItem>()
        {
            new CollectionItem() {Value = "1", Name = "One"},
            new CollectionItem() {Value = "2", Name = "Two"},
            new CollectionItem() {Value = "3", Name = "Three"},
            new CollectionItem() {Value = "4", Name = "Four"},
            new CollectionItem() {Value = "5", Name = "Five"}
        };

        public string SelectedValue { get; set; } = "2";

    }

    public class CollectionItem
    {
        public string Value { get; set; }

        public string Name { get; set; }
    }
}

