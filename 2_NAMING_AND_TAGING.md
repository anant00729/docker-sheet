### To name the container use the following command

```
docker run --help
```

```
docker run -p 3000:80 -d --rm --name goalsapp 68a6805f541f
```


### To name the image use the following command

the name of image consists of two parts 

```
name:tag
```

name can be anything. since, we had checked some offcial images from docker hub. One of the offcial image name is 
node and the other one was python.

Example: node, python

tag defines the specailizsed image within the group of images

Example: 14

In the Dockerfile we can define 

```
FROM node:14
```

here we are using the 14th version of node.


```
FROM node:16
```

here we are using the 16th version of node.

run the the following command:

```
docker build --help
```

we will get a lot of options as shown below

```
Options:
      --add-host list           Add a custom host-to-IP mapping (host:ip)
      --build-arg list          Set build-time variables
      --cache-from strings      Images to consider as cache sources
      --disable-content-trust   Skip image verification (default true)
  -f, --file string             Name of the Dockerfile (Default is 'PATH/Dockerfile')
      --iidfile string          Write the image ID to the file
      --isolation string        Container isolation technology
      --label list              Set metadata for an image
      --network string          Set the networking mode for the RUN instructions during build (default "default")
      --no-cache                Do not use cache when building the image
  -o, --output stringArray      Output destination (format: type=local,dest=path)
      --platform string         Set platform if server is multi-platform capable
      --progress string         Set type of progress output (auto, plain, tty). Use plain to show container output (default "auto")
      --pull                    Always attempt to pull a newer version of the image
  -q, --quiet                   Suppress the build output and print image ID on success
      --secret stringArray      Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret
      --ssh stringArray         SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format:
                                default|<id>[=<socket>|<key>[,<key>]])
  -t, --tag list                Name and optionally a tag in the 'name:tag' format
      --target string           Set the target build stage to build.
```


### To add name:tag combination for image to be build 

```
docker build -t goals_img:latest .
```

on runngin the display images command we get 

```
docker images
```

```
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
goals_img    latest    faf894234ec2   15 seconds ago   948MB
```