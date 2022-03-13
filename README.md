#### jenkins_demo

```
sudo docker run --name myjenkins -d -p 8080:8080 -p 5000:5000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkins_custom:1.0
```
