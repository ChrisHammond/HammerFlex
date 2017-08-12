HammerFlex
==========

Description
-----------
Another free open source skin for DNN (DotNetNuke) using Bootstrap 3. If you are looking for a Bootstrap 4 skin, [check out HammerHead](http://github.com/ChrisHammond/HammerHead).

Installation and Customization
------------------------------
You install this DNN Skin like any other DNN extension from the Host/Extensions page (do not install via Admin/Extensions), for production use download the INSTALL package from the releases page. For development you can either Fork the project here on GitHub, or you can download the source package. Install the SOURCE package into your development environment. The skin, as are all my modules, is designed for use in a local development environment at http://dnndev.me/ 

* Introduction Blog Post on the Skin http://www.chrishammond.com/blog/itemid/2644/introducing-hammerflex-a-new-open-source-skin-for.aspx
* Blog discussing the Layouts available in the Skin http://www.chrishammond.com/blog/itemid/2647/the-layouts-of-the-hammerflex-open-source-skin-for.aspx
* How to use the Carousel in HammerFlex http://www.chrishammond.com/blog/itemid/2645/using-the-bootstrap-carousel-in-the-dnn-hammerflex.aspx

Development and Source Code Notes
---------------------------------
If you want to customize this skin, using the source code, here are the steps that I would recommend. 

1. Setup your development environment using the URL DNNDEV.ME you can follow this tutorial: http://www.christoc.com/Tutorials/All-Tutorials/aid/1
2. Download the SOURCE package of the skin from GitHub
3. Install the SOURCE package of the skin from the Host/Extensions page
4. Open the CSPROJ file for the skin project, located in /portals/_default/skins/hammerflex/
5. To repackage the skin, build in RELEASE mode. (if you want to change version numbers, change the numbers in AssemblyInfo.cs and hammerflex.dnn)
6. You can find the new Packages for the Skin in the INSTALL folder /portals/_default/skins/hammerflex/install


Visual Studio Template
---------------------------------
An early version of this skin is the base for the C# Theme Template found in Christoc's DotNetNuke Module and Theme Development template. You can find them available for free in the DNN Store: http://cjh.am/dnntemplates

If you don't want/need to change the source code itself, you could simply override the CSS for the skin by modifying your Portal.CSS file.

