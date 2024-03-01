# VU virtual lab
This is a template for creating a virtual lab environment using 360º panoramic images and the open source panorama viewer [Pannellum](https://pannellum.org). For a demo, go to https://vu-ih2ls.github.io/vu-virtual-lab/.
## Image capture and pre-processing
The 360º panoramic images are expected to be in [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) format. Below an equirectangular image taken using the Insta360 X3 camera in the 72MP mode is shown.
![equirectangular](https://github.com/vu-ih2ls/vu-virtual-lab/assets/63956556/09f2f9f0-4798-4d18-9c0d-bda2e7575783)

First, the image should be exported as an equirectangular image using the software provided with the camera (in this case Insta360 Studio). Be aware that there could be some errors in stitching the images together, so keep that in mind when setting up the camera.
![insta360studio](https://github.com/vu-ih2ls/vu-virtual-lab/assets/63956556/11c8df1c-d4de-4e8c-bd5b-0196c0b1196f)

The resulting image is likely large (~30-40 MB), so compression is necessary. This can be done using any image editing software (in this case Pixelmator Pro). The quality is set to 80% and the WebP format is used, as this is most space-efficient.
![pixelmatorpro](https://github.com/vu-ih2ls/vu-virtual-lab/assets/63956556/d522ca15-afc3-46cf-adeb-1948cd0c485d)
