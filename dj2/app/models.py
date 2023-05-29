from django.db import models

class Likes(models.Model):
    value = models.IntegerField(default = 0)
