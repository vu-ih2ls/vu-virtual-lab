# VU virtual lab
This is a template for creating a virtual lab environment using 360º panoramic images and the open source panorama viewer [Pannellum](https://pannellum.org).[^1] For a demo, go to https://vu-ih2ls.github.io/vu-virtual-lab/.

[^1]: Petroff, Matthew A. "Pannellum: a lightweight web-based panorama viewer." Journal of Open Source Software 4, no. 40 (2019): 1628. doi:10.21105/joss.01628

## Image capture and pre-processing
The 360º panoramic images are expected to be in the [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) format. Below an equirectangular image is shown, taken using the Insta360 X3 camera in 72MP mode.
![equirectangular](https://github.com/vu-ih2ls/vu-virtual-lab/assets/63956556/09f2f9f0-4798-4d18-9c0d-bda2e7575783)

First, the image should be exported as an equirectangular image using the software provided with the camera (in this case Insta360 Studio). Be aware that there could be some errors in the stitching of the images by the camera, so keep that in mind when setting up the camera.
![insta360studio](https://github.com/vu-ih2ls/vu-virtual-lab/assets/63956556/11c8df1c-d4de-4e8c-bd5b-0196c0b1196f)

The resulting image is likely large (~30-40 MB), so compression is necessary to keep loading times manageable. This can be done using any image editing software (in this case Pixelmator Pro). The quality is set to 80% and the WebP format is used, as this is most space-efficient.
![pixelmatorpro](https://github.com/vu-ih2ls/vu-virtual-lab/assets/63956556/d522ca15-afc3-46cf-adeb-1948cd0c485d)

For removing the tripod, two approaches are possible: adding a logo over the tripod (using the app provided with the 360 camera) or editing it using an image editing program that is able to edit equirectangular images (for example in Affinity Photo using live projection).

## Virtual lab setup
To create a virtual lab environment, first create a new repository using this template. To get started, first look at `settings.js`, which contains the following variables:
- `baseUrl` (string): the url of the canvas page in the format `https://canvas.<UNIVERSITY>.nl/<COURSE_CODE>/`, where `<UNIVERSITY>` and `<COURSE_CODE>` should be edited, for example `https://canvas.vu.nl/courses/12345/`
- `folder` (string): the name of the folder containing the images, the default is `img`
- `smallScreenWarning` (boolean): there is an option to show a warning for screens smaller than 800 pixels, the warning is not permanent and can be clicked away, if you do not want this behavior, set it to `false`, the default is `true`

The second step is to upload your images into the `img` folder (or any other folder you specified in `settings.js` using `folder`). The rest of the files are explained below:
- `pannellumViewer.js`: Here you can change all the settings related to Pannellum, the virtual tour, locations of markers and more. For an extensive explanation, see https://pannellum.org/documentation/overview/. Also look at the useful links below.
- `index.html`: By default, the virtual lab environment consists of one single page that shows the pannellum viewer in fullscreen, as this works best when embedding the website in canvas or any other site. To change anything on this default page, edit `index.html`.
- `fallback.html`: Shown when the browser does not support WebGL and/or Pannellum. An option could be to show some static images of the lab, as those will always load.
- `favicon.ico`: The icon that will be shown in the browser tab, the default is the iH2LS logo. The icon can be removed for no icon or replaced by generating an icon using image editing software or an online tool (https://realfavicongenerator.net for example).
- `pannellum` (folder): In this folder, the Pannellum library is stored, dowloaded from https://pannellum.org/download/. This is used instead of the CDN Pannellum provides for reliability. If necessary, the CDN can also be used instead of the folder.

## Useful links
- The Pannellum examples (https://pannellum.org/documentation/examples/simple-example/)
  - [Adding hotspots](https://pannellum.org/documentation/examples/hot-spots/)
  - [Setting up a tour](https://pannellum.org/documentation/examples/tour/)
  - [Setting the initial view](https://pannellum.org/documentation/examples/initial-view/)
- All Pannellum JSON configuration options (https://pannellum.org/documentation/reference/#json-configuration-file-options)
